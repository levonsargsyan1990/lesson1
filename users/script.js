  function retry() {
    document.getElementById("active").style.display = "block";
    document.getElementById('retry').style.display = "none";
    document.getElementById('table').style.display = "block";
    axios
      .get('https://reqres.in/api/users')
      .then(function (response) {
        let html = "";

        response.data.data.forEach(element => {

          let inTable = "<tr data-userId='" + element.id + "'>" +
            "<td>" + " <h4 class='ui image header'>" + "<img src='" + element.avatar + "' class='ui mini rounded image'" + "/>" + "</td>" +
            "<td>" + element.first_name + " " + element.first_name + " </td>" +
            "<td>" + element.email + " </td>" +
            " </tr>";
          html += inTable;

        });


        document.getElementById('tbody').innerHTML = html;
      })
      .catch(function (error) {
        let err = "<div class='ui negative message'>" +
          "<div class='header'>" + error + " </div> " + "</div>";
        document.getElementById('error').innerHTML = err;
        document.getElementById('retry').style.display = "block";
        document.getElementById('table').style.display = "none";

      })
      .finally(function () {
        document.getElementById("active").style.display = "none";
      });
  }
  retry();