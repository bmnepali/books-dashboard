import jquery from 'jquery';

jquery(document).ready(() => {
  jquery('.mobile-menu').click(() => {
    jquery('.sidebar').toggleClass('active');
  });
  jquery('.mobile-profile-setting').click(() => {
    jquery('.navbar-menu-content').toggleClass('active');
  });
});
