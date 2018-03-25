import variable from "./../variables/commonColor";

export default (variables = variable) => {
  const tabTheme = {
    flex: 1,
    backgroundColor: variables.brandPrimaryDark
  };

  return tabTheme;
};
