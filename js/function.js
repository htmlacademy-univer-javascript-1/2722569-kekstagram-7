function checkLength(stroka, maxleng) {
  if (stroka.length > maxleng) {
    return false;
  }
  return true;

}

function isPolindrom(stroka) {
  if (stroka.replaceAll(" ","") === stroka.replaceAll(" ","").split("").reverse("").join("")) {
    return true;
  }
  return false;
}

