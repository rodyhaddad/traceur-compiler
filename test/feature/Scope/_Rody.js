// Options: --block-binding

function l() {

  while (false) {
    let a = 5;
    function t() {
      console.log(a);
      function q() {
        while (false) {
          let a = 10;
          function p() {
            console.log(a);
          }
        }

      }
    }
  }

}