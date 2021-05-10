export const goToLogIn = (history) => {
  history.push("/login");
};

export const goToSignUp = (history) => {
  history.push("/signup");
};

export const goToHome = (history) => {
  history.push("/");
};

export const goToImageDetails = (history, id) => {
  history.push(`/image/${id}`);
};

export const goToAddImage = (history) => {
  history.push("/add-image");
};
