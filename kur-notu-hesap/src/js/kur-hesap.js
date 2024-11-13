// This file is part of yk38spage.github.io.
//
// yk38spage.github.io is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
//
// yk38spage.github.io is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License along with yk38spage.github.io. If not, see <https://www.gnu.org/licenses/>.

function replaceDotComma(InsertedData) {
    return InsertedData.toString().replace(/\./g, ',');
}

function hesap() {
    var q1=document.getElementById("quiz1").value;
    var q2=document.getElementById("quiz2").value;
    var q3=document.getElementById("quiz3").value;
    var q4=document.getElementById("quiz4").value;

    var qsonuc=(parseFloat(q1)+parseFloat(q2)+parseFloat(q3)+parseFloat(q4))/4;

    var w=(document.getElementById("writ").value)/10;
    var icp=(document.getElementById("perf").value)/20;
    var vd=(document.getElementById("vid").value)/20;
    var on=(document.getElementById("onl").value)/20;

    var inclass=parseFloat(qsonuc)/5+parseFloat(w)+parseFloat(icp)+parseFloat(vd)+parseFloat(on)

    var exu=(document.getElementById("exit_use").value)*15/100;
    var exw=(document.getElementById("exit_writ").value)/10;
    var exl=(document.getElementById("exit_lis").value)/10;
    var exr=(document.getElementById("exit_read").value)/10;
    var exs=(document.getElementById("exit_speak").value)/10;

    var ex=parseFloat(exu)+parseFloat(exw)+parseFloat(exl)+parseFloat(exr)+parseFloat(exs);
    var sum=parseFloat(inclass)+parseFloat(ex);

    if (!isNaN(sum)) {
        document.getElementById("summary").innerHTML='<p>Quiz ortalamanız: '+replaceDotComma(qsonuc)+'</p><p>Quizlerden kazandığınız puan: '+replaceDotComma(parseFloat(qsonuc)/5)+'</p><br><p><b>Kur içi (In-Class) notunuz:</b> '+replaceDotComma(inclass)+'</p><p><b>Kur bitirme (Level Exit) notunuz:</b> '+replaceDotComma(ex)+"</p><br><p><b>Genel ortalamanız:</b> "+replaceDotComma(sum)+"</p>";
        if (parseFloat(sum)>=70) {
            document.getElementById("gectikaldi").innerHTML='<br><p style="color: #138819;"><i class="fa-solid fa-circle-check"></i> <b>Geçtiniz!</b> Varsa sonraki kurunuzdan, yoksa kendi bölümünüzden devam edeceksiniz.</p><br><p><b>Yeni bir hesaplama yapmak ister misiniz?</b></p><br><button class="btn" onclick="window.location.reload();">BURAYA TIKLAYIN</button>';
        } else {
            document.getElementById("gectikaldi").innerHTML='<br><p style="color: #b90d0d;"><i class="fa-solid fa-circle-xmark"></i> <b>Kaldınız.</b> Kur tekrarı yapmanız gerek.</p><br><p><b>Yeni bir hesaplama yapmak ister misiniz?</b></p><br><button class="btn" onclick="window.location.reload();">BURAYA TIKLAYIN</button><hr class="spr-btn">';
        }
    } else {
        document.getElementById("summary").innerHTML='<p style="color: #e4860a;"><i class="fa-solid fa-circle-exclamation"></i> <b>Lütfen tüm bölümleri doğru şekilde doldurunuz!</b></p>';
        document.getElementById("gectikaldi").innerHTML="";
    }
}