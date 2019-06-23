const active = document.querySelector('.active');
const retryButton = document.querySelector('.retry');
const loadButton = document.querySelector('.load');
const table = document.querySelector('.very');
const tbody = table.querySelector('#tbody');
const errorContent = document.querySelector('.err');
const errorMessage = errorContent.querySelector('#errorMessage');
const modal = document.querySelector('#modal');
const deleteButtons = document.querySelectorAll('.deleteButton');
const negativeButtons = modal.querySelector('.negative.button');
const deleteError = modal.querySelector('.delete-error');
let isThrowing = false;

// Uncomment this line to see error at first load
// isThrowing = true;

loadButton.classList.remove('hidden', 'message');
errorContent.classList.add('hidden', 'message');
table.classList.add('hidden', 'message');

function openModal(id, name) {
  modal.classList.add('active', 'flex', 'visible');
  negativeButtons.dataset.id = id;
  modal.querySelector('.delete-confirm-message').querySelector('.name').innerHTML = name;
  deleteError.querySelector('.name').innerHTML = name;
}

function closeModal() {
  modal.classList.remove('active', 'flex', 'visible');
  deleteError.classList.add('hidden');
}

function load(page = 1, per_page = 5) {
  loadButton.classList.remove('positive', 'basic');
  loadButton.classList.add('loading');

  axios
    .get(`https://reqres.in/api/users?page=${page}&per_page=${per_page}`)
    .then((response) => {

      if (isThrowing) {
        isThrowing = false;
        throw new Error('Something went wrong, please try again.');
      }

      // Uncomment to see error before every load
      // isThrowing = true;

      table.classList.remove('hidden', 'message');
      const html = response.data.data.reduce(
        (acc, element) => `${acc}
        <tr  data-userId="${element.id}">
          <td>
            <img
              src="${element.avatar}"
              class="ui mini rounded image"
            />
          </td>
          <td>
            <span class="ui name">${element.first_name} ${element.last_name}</span>
            <div class="ui hidden message input name-input">
              <input type="text" value="${element.first_name} ${element.last_name}" placeholder="Name">
            </div>
          </td>
          <td>
            <span class="ui email">${element.email}</span>
            <div class="ui hidden message input email-input">
              <input type="text" value="${element.email}" placeholder="Email">
            </div>
          </td>
          <td>
            <button data-name="${element.first_name} ${element.last_name}" class="deleteButton ui negative basic button">Delete</button>
            <button class="ui editButton primary basic button">Edit</button>
            <button class="ui saveButton primary hidden message basic button">Save</button>
            <button class="ui cancelButton basic hidden message button">Cancel</button>
          </td>
        </tr>
      `,
        '',
      );
      tbody.innerHTML += html;
      let deleteButtons = document.querySelectorAll('.deleteButton');
      let editButtons = document.querySelectorAll('.editButton');
      let cancelButtons = document.querySelectorAll('.cancelButton');
      let saveButtons = document.querySelectorAll('.saveButton');

      for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', function (element) {
          openModal(this.parentNode.parentNode.dataset.userid, this.dataset.name);
        }, false);
      }
      for (var i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener('click', function (element) {
          editUser(this);
        }, false);
      }
      for (var i = 0; i < cancelButtons.length; i++) {
        cancelButtons[i].addEventListener('click', function (element) {
          cancelEditUser(this);
        });
      }
      for (var i = 0; i < saveButtons.length; i++) {
        saveButtons[i].addEventListener('click', function (element) {
          saveUser(this);
        });
      }

      let nextPage = +page + 1;
      if (nextPage > response.data.total_pages) {
        loadButton.classList.add('hidden', 'message');
      } else {
        loadButton.dataset.page = nextPage;
      }
    })
    .catch((error) => {
      errorMessage.innerHTML = error;
      loadButton.classList.add('hidden', 'message');
      errorContent.classList.remove('hidden', 'message');
      retryButton.classList.remove('hidden', 'message');
    })
    .finally(() => {
      active.classList.add('ui', 'hidden', 'message');;
      loadButton.classList.remove('loading');
      loadButton.classList.add('positive', 'basic');
    });
}

function retry() {
  load(loadButton.dataset.page);
  table.classList.remove('hidden', 'message');
  loadButton.classList.remove('hidden', 'message');
  errorContent.classList.add('hidden', 'message');
}

function deleteUser(id) {
  negativeButtons.classList.add('loading');
  axios
    .delete(`https://reqres.in/api/users/${id}`)
    .then(response => {
      document.querySelector(`[data-userId='${id}']`).remove();
      closeModal();
    })
    .catch(error => {
      deleteError.classList.remove('hidden');
    })
    .finally(() => {
      negativeButtons.classList.remove('loading');
    });
}

function editUser(editButton) {
  let deleteButton = editButton.parentNode.querySelector('.deleteButton');
  let cancelButton = editButton.parentNode.querySelector('.cancelButton');
  let saveButton = editButton.parentNode.querySelector('.saveButton');
  let row = editButton.parentNode.parentNode;

  row.querySelector('.name').classList.add('hidden', 'message');
  row.querySelector('.email').classList.add('hidden', 'message');
  row.querySelector('.name-input').classList.remove('hidden', 'message');
  row.querySelector('.email-input').classList.remove('hidden', 'message');

  editButton.classList.add('hidden', 'message');
  deleteButton.classList.add('hidden', 'message');
  saveButton.classList.remove('hidden', 'message');
  cancelButton.classList.remove('hidden', 'message');
}

function cancelEditUser(cancelButton) {
  let deleteButton = cancelButton.parentNode.querySelector('.deleteButton');
  let editButton = cancelButton.parentNode.querySelector('.editButton');
  let saveButton = cancelButton.parentNode.querySelector('.saveButton');
  let row = cancelButton.parentNode.parentNode;
  let nameInput = row.querySelector('.name-input');
  let emailInput = row.querySelector('.email-input');

  row.querySelector('.name').classList.remove('hidden', 'message');
  row.querySelector('.email').classList.remove('hidden', 'message');
  nameInput.classList.add('hidden', 'message');
  emailInput.classList.add('hidden', 'message');
  nameInput.querySelector('input').value = row.querySelector('.name').innerHTML;
  emailInput.querySelector('input').value = row.querySelector('.email').innerHTML;

  errorContent.classList.add('hidden', 'message');
  editButton.classList.remove('hidden', 'message');
  deleteButton.classList.remove('hidden', 'message');
  cancelButton.classList.add('hidden', 'message');
  saveButton.classList.add('hidden', 'message');
}

function saveUser(saveButton) {
  let deleteButton = saveButton.parentNode.querySelector('.deleteButton');
  let editButton = saveButton.parentNode.querySelector('.editButton');
  let cancelButton = saveButton.parentNode.querySelector('.cancelButton');
  let row = saveButton.parentNode.parentNode;
  let id = row.dataset.userid;
  let nameInput = row.querySelector('.name-input');
  let emailInput = row.querySelector('.email-input');
  let newName = nameInput.querySelector('input').value;
  let newEmail = emailInput.querySelector('input').value;

  nameInput.classList.add('disabled');
  emailInput.classList.add('disabled');
  let params = {
    'name': `${newName}`,
    'email': `${newEmail}`
  };

  saveButton.classList.add('loading');
  cancelButton.classList.add('disabled');

  axios
    .put(`https://reqres.in/api/users/${id}`, params)
    .then(response => {
      errorContent.classList.add('hidden', 'message');
      row.querySelector('.name').innerHTML = newName;
      row.querySelector('.email').innerHTML = newEmail;
      nameInput.classList.add('hidden', 'message');
      emailInput.classList.add('hidden', 'message');
      row.querySelector('.name').classList.remove('hidden', 'message');
      row.querySelector('.email').classList.remove('hidden', 'message');
      editButton.classList.remove('hidden', 'message');
      deleteButton.classList.remove('hidden', 'message');
      saveButton.classList.add('hidden', 'message');
      cancelButton.classList.add('hidden', 'message');
    })
    .catch(error => {
      let name = row.querySelector('.name').innerHTML;
      errorMessage.innerHTML = `Sorry, we were not able to edit ${name} personal details. Please try again later`;

      errorContent.classList.remove('hidden', 'message');
      retryButton.classList.add('hidden', 'message');
    })
    .finally(() => {
      saveButton.classList.remove('loading');
      cancelButton.classList.remove('disabled');
      nameInput.classList.remove('disabled');
      emailInput.classList.remove('disabled');
    });
}
// initial call
load();

// Adding events
loadButton.addEventListener('click', function () {
  load(loadButton.dataset.page);
});
retryButton.addEventListener('click', retry);
negativeButtons.addEventListener('click', function () {
  deleteUser(this.dataset.id);
});
modal.querySelector('.cancel').addEventListener('click', closeModal);