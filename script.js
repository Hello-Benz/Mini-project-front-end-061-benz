
let showresult = document.querySelector(".result");

function grade(){

    let midterm = Number(document.getElementById("midterm").value);
    let final = Number(document.getElementById("final").value);
    let other = Number(document.getElementById("other").value);

    let total = document.getElementById("total");
    let grade = document.getElementById("grade");
    let detail = document.getElementById("detail");

    let Allresult;

    if(!midterm || !final || !other){
        Swal.fire({
            title: "กรุณากรอกข้อมูลให้ครบถ้วน",
            text: "คุณยังไม่ได้ระบุคะแนน หรือ บางช่องยังมีช่องว่างอยู่",
            icon: "warning"
            });
    } else if (midterm > 30) {
        Swal.fire({
            title: "กรุณากรอกคะแนนกลางภาค ไม่เกิน 30 คะแนน",
            text: "คะแนนในส่วนนี้ไม่ตรงกับเงื่อนไขของโปรแกรม กรุราระบุใหม่",
            icon: "warning"
            });
    } else if (final > 50) {
        Swal.fire({
            title: "กรุณากรอกคะแนนปลายภาค ไม่เกิน 50 คะแนน",
            text: "คะแนนในส่วนนี้ไม่ตรงกับเงื่อนไขของโปรแกรม กรุราระบุใหม่",
            icon: "warning"
            });
    } else if (other > 20) {
        Swal.fire({
            title: "กรุณากรอกคะแนนจิตพิสัย ไม่เกิน 20 คะแนน",
            text: "คะแนนในส่วนนี้ไม่ตรงกับเงื่อนไขของโปรแกรม กรุราระบุใหม่",
            icon: "warning"
            });
    } else {
        Swal.fire({
            title: "คำนวนคะแนนสำเร็จ",
            text: "สามารถดูผลลัพท์ของคะแนนได้ที่ช่องด้านล่าง",
            icon: "success"
            });

        Allresult = midterm + final + other;
        showresult.setAttribute("class", "show");

        if(Allresult>80){
            total.innerHTML = "คะแนนรวมของคุณคือ : " + Allresult;
            grade.innerHTML = "ผลการเรียนที่ได้ : A";
            detail.innerHTML = "ผลการเรียนของคุณอยู่ในระดับยอดเยี่ยม";
        } else if (Allresult>70) {
            total.innerHTML = "คะแนนรวมของคุณคือ : " + Allresult;
            grade.innerHTML = "ผลการเรียนที่ได้ : B";
            detail.innerHTML = "ผลการเรียนของคุณอยู่ในระดับดีมาก";
        } else if (Allresult>60) {
            total.innerHTML = "คะแนนรวมของคุณคือ : " + Allresult;
            grade.innerHTML = "ผลการเรียนที่ได้ : C";
            detail.innerHTML = "ผลการเรียนของคุณอยู่ในระดับดี";
        } else if (Allresult>50) {
            total.innerHTML = "คะแนนรวมของคุณคือ : " + Allresult;
            grade.innerHTML = "ผลการเรียนที่ได้ : D";
            detail.innerHTML = "ผลการเรียนของคุณอยู่ในระดับพอใช้";
        } else {
            total.innerHTML = "คะแนนรวมของคุณคือ : " + Allresult;
            grade.innerHTML = "ผลการเรียนที่ได้ : F";
            detail.innerHTML = "ผลการเรียนของคุณไม่ผ่านเกณฑ์ที่กำหนด";
        }

    }

}