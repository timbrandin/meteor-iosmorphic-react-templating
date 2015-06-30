<template name="Page">
  <div class="yo">
    <div class="username">{this.data.username}</div>
    <div class="message">{this.data.message}</div>
  </div>
</template>

Template.Page.onCreated(function() {
  let component = this;
  component.username = new ReactiveVar('stubailo');
  component.message = new ReactiveVar('Hey! Check these React packages!');
  component.componentDidMount = function() {
    setTimeout(function() {
      component.username.set('timbrandin');
      component.message.set('Wow! Can we get an SSR example?!');
    }, 2000);

    setTimeout(function() {
      component.username.set('engelgabriel');
      component.message.set(':+1:');
    }, 4000);

    setTimeout(function() {
      component.username.set('AdamBrodzinski');
      component.message.set(':+1:');
    }, 6000);

    setTimeout(function() {
      component.username.set('stubailo');
      component.message.set('Wait, what? Is this Blaze?');
    }, 8000);

    setTimeout(function() {
      component.username.set('timbrandin');
      component.message.set('No! It\'s actually React!');
    }, 10000);

    setTimeout(function() {
      component.username.set('engelgabriel');
      component.message.set(':+1:');
    }, 12000);

    setTimeout(function() {
      component.username.set('stubailo');
      component.message.set(':+1:');
    }, 14000);
  };
});

Template.Page.helpers({
  username: function() {
    return this.username.get();
  },
  message: function() {
    return this.message.get();
  },
});
