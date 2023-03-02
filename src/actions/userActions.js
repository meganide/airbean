function changeName(name) {
  return {
    type: 'CHANGE-NAME',
    payload: name,
  };
}

export { changeName };
