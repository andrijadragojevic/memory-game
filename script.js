let order = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];

order.sort(() => (Math.random() > .5) ? 1 : -1);

