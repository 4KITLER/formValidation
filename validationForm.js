function validationForm(key) {
   let pattern = mainData.checkData[key].pattern;
   let input = $(mainData.checkData[key].classElem).val();
   if (!pattern.test(input)) {
      return;
   }

   return true;
}
