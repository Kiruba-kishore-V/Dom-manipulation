const saveChanges= () => {
 const taskData = {
    id: `${Date.now()}`,
    ImageUrl: document.getElementById("imageurl").value,
    Tasktitle: document.getElementById("tasktitle").value,
    Tasktype: document.getElementById("tasktype").value,
    Taskdescription: document.getElementById("taskdescription").value,

   };


   console.log(taskData);
};
