import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

const SignInWithEmailPassword = async (email, password) => {
  try {
    return await auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    throw new Error(error.message);
  }
};

const SignUpWithEmailPassword = async (email, password, userData) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    const userId = userCredential.user.uid;
    await database()
      .ref(`users/${userId}`)
      .set({...userData, id: userId});
    return userCredential;
  } catch (error) {
    throw new Error(error.message);
  }
};

// const sendPasswordResetEmail = async (email) => {
//     try {
//       return await auth().sendPasswordResetEmail(email);
//     } catch (error) {
//         throw new Error(error.message)
//     }
//   };

//   const verifyResetCode = async (otp) => {
//     try {
//       return await auth().verifyPasswordResetCode(otp);
//     } catch (error) {
//         throw new Error(error.message)
//     }
//   };

//   const confirmPasswordReset = async () => {
//     try {
//       await auth().confirmPasswordReset(resetCode, newPassword);
//     } catch (error) {
//         throw new Error(error.message)
//     }
//   };

const reauthenticate = async currentPassword => {
  var user = auth().currentUser;
  var cred = auth.EmailAuthProvider.credential(user.email, currentPassword);
  return await user.reauthenticateWithCredential(cred);
};

const changePassword = async (currentPassword, newPassword) => {
  try {
    await reauthenticate(currentPassword);
    const user = auth().currentUser;
    return user;
    // return await user.updatePassword(newPassword);
  } catch (error) {
    throw new Error(error.message);
  }
};

const loginWithGoogle = async () => {
  try {
    GoogleSignin.configure({
      webClientId:
        '938613023234-bo03v1acf1fse90jaegrajv5qprqra2o.apps.googleusercontent.com',
    });
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      throw new Error('ERROR', 'user cancelled the login flow');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      throw new Error('operation (e.g. sign in) is in progress already');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      throw new Error('play services not available or outdated');
    } else {
      // some other error happened
      throw new Error(error.message);
    }
  }
};

const loginWithFacebook = async () => {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccessToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
};

const annonymousLogin = async () => {
  try{
    const res = await auth().signInAnonymously();
    return res;
  }catch(error){
    if (error.code === 'auth/operation-not-allowed') {
      throw new Error('Enable anonymous in your firebase console.');
    }
    throw new Error(error);
  }
}

export {
  SignInWithEmailPassword,
  SignUpWithEmailPassword,
  changePassword,
  loginWithGoogle,
  loginWithFacebook,
  annonymousLogin
  // sendPasswordResetEmail,
  // verifyResetCode,
  // confirmPasswordReset,
};
