function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }
  
  
  document.getElementById("taskForm").onsubmit = function(event) {
    event.preventDefault();
    const taskName = document.getElementById("taskName").value;
    const taskDescription = document.getElementById("taskDescription").value;
    alert(`Task Added: ${taskName}\nDescription: ${taskDescription}`);
    closeModal("taskModal");
  };
  

  document.getElementById("labourForm").onsubmit = function(event) {
    event.preventDefault();
    const labourName = document.getElementById("labourName").value;
    const labourRole = document.getElementById("labourRole").value;
    alert(`Labour Added: ${labourName}\nRole: ${labourRole}`);
    closeModal("labourModal");
  };
  
  function generateReport() {
    alert("Generating report...");
  }
  