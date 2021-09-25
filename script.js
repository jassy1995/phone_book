const isUserExist = (fName, lName, phone) => {
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].firstName === fName &&
      users[i].lastName === lName &&
      users[i].phone === phone
    ) {
      return true;
    } else {
      return false;
    }
  }
};

const saveData = (firstName, lastName, phone) => {
  let isExist = isUserExist(firstName, lastName, phone);
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  if (!isExist) {
    let user = { firstName, lastName, phone };
    localStorage.setItem("users", JSON.stringify([...users, user]));
    alert("you record has been saved");
    location.reload();
  } else {
    alert("user already exist");
  }
};
