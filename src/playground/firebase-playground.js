database.ref('location/city')
.once('value')
.then((snapshot) => {
  const val = snapshot.val();
  console.log(val);
}).catch((e) => {
  console.log('Error fetching data', e)
});

database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  });

database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  //child_changed
  database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  //child_added
  database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  database.ref('expenses')
  .on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  }, (e) => {
    console.log(e);
  });
  
  database.ref('expenses').push({
    description: 'expense one',
    note: 'electric bill',
    amount: 12500,
    createdAt: 1
  });
  
  database.ref('expenses').push({
    description: 'expense two',
    note: 'water bill',
    amount: 4700,
    createdAt: 17
  });
  
  database.ref('expenses').push({
    description: 'expense three',
    note: 'internet',
    amount: 8500,
    createdAt: 100
  });

//expenses stuff

database.ref('notes/-LKgYrnFCuUvhg1oXN42').remove();

database.ref('notes/-LKgYrnFCuUvhg1oXN42').update({
  body: 'buy food'
});

database.ref('notes').push({
  title: 'course topics',
  body: 'python'
});

database.ref('notes').set(notes);

const onValueChange = database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}, (e) => {
  console.log('Error with data fetching', e);
});


const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
}, (e) => {
  console.log('Error with data fetching', e);
});

setTimeout(() => {
  database.ref('age').set(28);
}, 3500);

setTimeout(() => {
  database.ref().off(onValueChange());
}, 5000);

setTimeout(() => {
  database.ref('age').set(22);
}, 8500);

database.ref().set({
  name: 'Matthew yates',
  age: 22,
  stressLevel: 6,
  job: {
    title: 'Web Developer',
    company: 'insert startup'
  },
  location: {
    city: 'lynchburg',
    country: 'United States'
  },
}).then(() => {
  console.log('data is saved');
}).catch((e) => {
  console.log('This failed', e);
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
})

database.ref('age').set('22');
database.ref('location/city').set('NYC');

database.ref('attributes').set({
  height: 67,
  weight: 176
}).then(() => {
  console.log('attributes saved');
}).catch((e) => {
  console.log('Error: ', e);
});

database.ref('isSingle')
.remove()
.then(() => {
  console.log('removed');
}).catch(() => {
  console.log('Error: ', e);
});

database.ref().update({
  job: 'Web-developer',
  'location/city': 'Boston'
});

database.ref().update({
  name: 'Mike',
  age: 29
}).then(() => {
  console.log('updated')
}).catch((e) => {
console.log(e);
});