function changeName(name) {
  return {
    type: 'CHANGE-NAME',
    payload: name,
  };
}

function changeOrderNr(orderNr) {
  return {
    type: 'CHANGE-ORDERNR',
    payload: orderNr,
  };
}

export { changeName, changeOrderNr };
