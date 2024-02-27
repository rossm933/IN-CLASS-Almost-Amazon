import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (item) => {
  clearDom();
  let domString = '';
  domString += `
  <div class="card" style="width: 18rem; margin-bottom: 10px;">
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
  item.books.forEach((obj) => {
    domString += `<div class="card-container" style="display: flex; flex-direction: row; width: 100%;">
    <div class="card" style="width: 30%; margin-right: 10px;">
    <img class="card-img-top" src=${obj.image} alt=${obj.title} style="height: 400px">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${obj.title}</h5>
            <p class="card-text bold">${obj.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${obj.price}` : `$${obj.price}`}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-book-btn--${obj.firebaseKey}"></i>
            <i id="edit-book-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-book-btn--${obj.firebaseKey}" class="btn btn-danger"><span class="fa-trash-alt"</span></i>
    </div>
    </div>`;
  });
  renderToDOM('#view', domString);
};
export default viewAuthor;
