const Query = {
  cars: (parent, args, context) => {
    return [{ id: 1, color: "blue", make: "Toyota" }];
  },
};

module.exports = Query;
