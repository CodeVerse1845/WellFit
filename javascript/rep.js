// Exercise-specific notes and recommendations
const exerciseNotes = {
    bench: "Bench Press: Keep your feet flat, shoulders retracted, and maintain a slight arch in your back.",
    squat: "Squat: Keep your chest up, knees tracking over toes, and maintain proper depth (hip crease below knee).",
    deadlift: "Deadlift: Keep the bar close to your body, maintain a neutral spine, and engage your lats.",
    overhead: "Overhead Press: Keep your core tight, avoid excessive back arch, and press straight up.",
    row: "Barbell Row: Maintain a neutral spine, pull to your lower chest, and keep your core engaged."
  };
  
  // Initialize Lucide icons
  lucide.createIcons();
  
  // DOM Elements
  const exerciseType = document.getElementById('exerciseType');
  const weightInput = document.getElementById('weight');
  const repsInput = document.getElementById('reps');
  const calculateBtn = document.getElementById('calculateBtn');
  const resetBtn = document.getElementById('resetBtn');
  const resultDiv = document.getElementById('result');
  const oneRMSpan = document.getElementById('oneRM');
  const exerciseNoteDiv = document.querySelector('.exercise-note');
  
  // Calculate 1RM using Brzycki formula
  function calculateOneRM(weight, reps) {
    return weight * (36 / (37 - reps));
  }
  
  // Format number to 1 decimal place
  function formatNumber(num) {
    return Math.round(num * 10) / 10;
  }
  
  // Update exercise note
  function updateExerciseNote() {
    exerciseNoteDiv.textContent = exerciseNotes[exerciseType.value];
  }
  
  // Calculate button click handler
  calculateBtn.addEventListener('click', () => {
    const weight = parseFloat(weightInput.value);
    const reps = parseFloat(repsInput.value);
  
    if (!weight || !reps || weight <= 0 || reps <= 0 || reps >= 37) {
      alert('Please enter valid weight and reps (1-36)');
      return;
    }
  
    // Add loading state
    calculateBtn.classList.add('loading');
    calculateBtn.disabled = true;
  
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const oneRM = calculateOneRM(weight, reps);
      oneRMSpan.textContent = formatNumber(oneRM);
      resultDiv.classList.remove('hidden');
      updateExerciseNote();
  
      // Remove loading state
      calculateBtn.classList.remove('loading');
      calculateBtn.disabled = false;
    }, 600);
  });
  
  // Reset button click handler
  resetBtn.addEventListener('click', () => {
    weightInput.value = '';
    repsInput.value = '';
    resultDiv.classList.add('hidden');
    exerciseType.selectedIndex = 0;
  });
  
  // Update exercise note when exercise type changes
  exerciseType.addEventListener('change', updateExerciseNote);