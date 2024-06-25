/* Sort an Array
Write a program that sorts an array of numbers in ascending order. */

function bubbleSort(arr) {
  let arrLength = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < arrLength; i++) {
      if (arr[i - 1] > arr[i]) {
        // Swap arr[i-1] and arr[i]
        let temp = arr[i - 1]; //9
        arr[i - 1] = arr[i]; //8
        arr[i] = temp; //9
        swapped = true;
      }
    }
    arrLength--;
  } while (swapped);
  return arr;
}
let patientsHealth = bubbleSort([99, 198, 247, 688, 327]);
let vaccinePower = bubbleSort([100, 328, 248, 689, 200]);

console.log("Sorted Patients Health: " + patientsHealth);
console.log("Sorted Vaccine Power: " + vaccinePower);

vaccineEnough = (patientsHealth, vaccinePower) => {
  for (let i = 0; i < patientsHealth.length; i++) {
    let curable = "Yes";
    if (patientsHealth[i] > vaccinePower[i]) {
      curable = "No";
      return curable;
    }
    return curable;
  }
};

console.log(vaccineEnough(patientsHealth, vaccinePower));
