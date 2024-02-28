import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const emptyAuthors = () => {
  const domString = '<h1>No Authors</h1>';
  renderToDOM('#author-store', domString);
};

const showAuthors = (array) => {
  clearDom();
  console.warn('Authors');
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
          <p class="card-text bold">${item.favorite ? '<span class="badge badge-info sale-badge"><i aria-hidden="true"></i> Favorite</span>' : ''}</p>
        <hr>
        <div style="margin-bottom: 15px;">
        </div>
        <i class="btn btn-success fas fa-eye" id="view-author-btn--${item.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-author--${item.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${item.firebaseKey}"></i>
      </div>
    </div>
    `;
    console.warn('Show Author');
  });
  renderToDOM('#author-store', domString);
};

export { showAuthors, emptyAuthors };
