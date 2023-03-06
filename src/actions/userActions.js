function changeName(name) {
  return {
    type: 'CHANGE_NAME',
    payload: name,
  };
}

function changeOrderNr(orderNr) {
  return {
    type: 'CHANGE_ORDERNR',
    payload: orderNr,
  };
}

export { changeName, changeOrderNr };
