const active = document.getElementById('active');
const retryButton = document.getElementById('retry');
const table = document.getElementById('table');
const tbody = table.querySelector('#tbody');
const errorMessage = document.getElementById('error');
const errorContent = errorMessage.querySelector('#errorContent');

let isThrowing = true;

function retry() {
  active.style.display = 'block';
  errorMessage.style.display = 'none';
  retryButton.style.display = 'none';
  table.style.display = 'block';
  axios
    .get('https://reqres.in/api/users')
    .then((response) => {
      if (isThrowing) {
        isThrowing = false;
        throw new Error('fail');
      }
      const html = response.data.data.reduce(
        (acc, element) => `${acc}
          <tr data-userId="${element.id}">
            <td>
              <img
                src="${element.avatar}"
                class="ui mini rounded image"
              />
            </td>
            <td>${element.first_name} ${element.last_name}</td>
            <td>${element.email}</td>
          </tr>
        `,
        '',
      );

      tbody.innerHTML = html;
    })
    .catch((error) => {
      errorContent.innerHTML = error;
      errorMessage.style.display = 'block';
      retryButton.style.display = 'block';
      table.style.display = 'none';
    })
    .finally(() => {
      active.style.display = 'none';
    });
}

retryButton.addEventListener('click', retry);
retry();
