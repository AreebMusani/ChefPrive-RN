const checkFormData = (formData) => {
    for (const key in formData) {
      if (!formData[key]) {
        return false;
      }
    }
    return true;
  };

export {checkFormData}