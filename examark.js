function marks(test1, test2) {
  let best_score = test1 > test2 ? test1 : test2;
  console.log(best_score)
  return best_score;
}

function course_work(test1, test2, cowk) {
  let total_coswork = marks(test1, test2) + cowk;
  let average = total_coswork / 2;
  let marks_out_of_40 = average * (40 / 100);
  console.log(average)
  return marks_out_of_40;
}

function final_exam(test1, test2, cowk, finalexm) {
  let marks_out_of_60 = finalexm * (60 / 100)
  let  marks_out_of_100=course_work(test1,test2,cowk)+marks_out_of_60
    console.log(marks_out_of_100)  
}
final_exam(70,90,80,95);