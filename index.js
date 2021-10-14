const taskContainer = document.querySelector(".task__container");
console.log(taskContainer);

const newCard =({
   id,
   ImageUrl,
   Tasktitle,
   Tasktype,
   Taskdescription,

   }) =>`<div class="col-md-6 col-lg-4" id=${id}>
            <div class="card">
                <div class="card-header d-flex justify-content-center gap-3">
                    <button type="button" class="btn btn-outline-success"><i class="fas fa-edit"></i></button>
                    <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-restore"></i></button>
                </div>
                <img src=${ImageUrl} class="card-img-top" alt="So lonely">
                <div class="card-body">
                  <h5 class="card-title">${Tasktitle}</h5>
                  <p class="card-text">${Taskdescription}</p>
                  <h5><span class="badge bg-primary">${Tasktype}</span></h5>
                </div>
                <div class="card-footer text-muted"><button type="button" class="btn btn-outline-primary float-end">Open task</button></div>
              </div>
         </div>
         
        </div>
            </div>`;






const saveChanges= () => {
 const taskData = {
    id: `${Date.now()}`,
    ImageUrl: document.getElementById("imageurl").value,
    Tasktitle: document.getElementById("tasktitle").value,
    Tasktype: document.getElementById("tasktype").value,
    Taskdescription: document.getElementById("taskdescription").value,

   };


const createNewCard = newCard(taskData);

taskContainer.insertAdjacentHTML("beforeend", createNewCard);

};
