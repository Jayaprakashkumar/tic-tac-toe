
window.onload = function () {

    var row = document.getElementsByTagName('tr').length;
    var col = document.getElementsByTagName('tr')[0].cells.length;
    len = row * col;
    var count = 0, ticMainDiag = 0, tacMainDiag = 0, ticSecDiag = 0, tacSecDiag = 0, horizontalTic = 0, horizontalTac = 0, verticalTic = 0, verticalTac = 0;

    for (i = 0; i < len; i++) {
        document.getElementsByTagName('td')[i].onclick = function () {
            ticMainDiag = 0;
            tacMainDiag = 0;
            ticSecDiag = 0;
            tacSecDiag = 0;
            horizontalTic = 0;
            horizontalTac = 0;
            verticalTic = 0;
            verticalTac = 0;

            count = count + 1;
            if (count <= len) {
                // alert(count);
                cellIndex = this.cellIndex;
                rowIndex = this.parentNode.rowIndex;
                if (count % 2 == 0) {
                    evenPosition();
                }
                else if (count % 2 != 0) {
                    oddPosition();
                }
            }
        }

    }
    function evenPosition() {
        document.getElementById('tab').rows[rowIndex].cells[cellIndex].innerHTML = "O";

        matchingState();
    }
    function oddPosition() {
        document.getElementById('tab').rows[rowIndex].cells[cellIndex].innerHTML = 'X';
        matchingState();
    }


    function matchingState() {
        if (count > 4) {
            for (i = 0; i < row; i++) {
                for (var j = 0; j < col; j++) {


                    if (i == j)                  // main diagonal 
                    {
                        if (document.getElementById('tab').rows[i].cells[j].innerHTML == 'X') {
                            ticMainDiag = ticMainDiag + 1;
                            console.log(ticMainDiag + " : ticMainDiag");
                        }
                        else if (document.getElementById('tab').rows[i].cells[j].innerHTML == 'O') {
                            tacMainDiag = tacMainDiag + 1;
                            console.log(tacMainDiag + " : tacMainDiag");
                        }

                    }

                    if (i + j == row - 1)      //secondary diagonal
                    {
                        if (document.getElementById('tab').rows[i].cells[j].innerHTML == 'X') {
                            ticSecDiag = ticSecDiag + 1;
                            console.log(ticSecDiag + " : ticSecDiag ");
                        }
                        else if (document.getElementById('tab').rows[i].cells[j].innerHTML == 'O') {
                            tacSecDiag = tacSecDiag + 1;
                            console.log(tacSecDiag + " : tacSecDiag ");
                        }

                    }

                }

            }

            // horizontal check
            for (i = 0; i < row; i++) {

                if ((document.getElementById('tab').rows[i].cells[0].innerHTML == 'X') && (document.getElementById('tab').rows[i].cells[1].innerHTML == 'X') && (document.getElementById('tab').rows[i].cells[2].innerHTML == 'X')) {
                    horizontalTic = 1;
                    document.getElementById('tab').rows[i].style.backgroundColor = '#cdcdcd';
                }
                else if ((document.getElementById('tab').rows[i].cells[0].innerHTML == 'O') && (document.getElementById('tab').rows[i].cells[1].innerHTML == 'O') && (document.getElementById('tab').rows[i].cells[2].innerHTML == 'O')) {
                    horizontalTac = 1;
                    document.getElementById('tab').rows[i].style.backgroundColor = '#cdcdcd';
                }

            }
            // vertical check
            for (j = 0; j < col; j++) {

                if ((document.getElementById('tab').rows[0].cells[j].innerHTML == 'X') && (document.getElementById('tab').rows[1].cells[j].innerHTML == 'X') && (document.getElementById('tab').rows[2].cells[j].innerHTML == 'X')) {
                    verticalTic = 1;
                    document.getElementById('tab').rows[0].cells[j].style.backgroundColor = "#cdcdcd";
                    document.getElementById('tab').rows[1].cells[j].style.backgroundColor = "#cdcdcd";
                    document.getElementById('tab').rows[2].cells[j].style.backgroundColor = "#cdcdcd";

                }
                if ((document.getElementById('tab').rows[0].cells[j].innerHTML == 'O') && (document.getElementById('tab').rows[1].cells[j].innerHTML == 'O') && (document.getElementById('tab').rows[2].cells[j].innerHTML == 'O')) {
                    verticalTac = 1;
                    document.getElementById('tab').rows[0].cells[j].style.backgroundColor = "#cdcdcd";
                    document.getElementById('tab').rows[1].cells[j].style.backgroundColor = "#cdcdcd";
                    document.getElementById('tab').rows[2].cells[j].style.backgroundColor = "#cdcdcd";
                }

            }

            if ((ticMainDiag == 3) || (tacMainDiag == 3)) {
                count = len + 1;
                document.getElementById('tab').rows[0].cells[0].style.backgroundColor = "#cdcdcd";
                document.getElementById('tab').rows[1].cells[1].style.backgroundColor = "#cdcdcd";
                document.getElementById('tab').rows[2].cells[2].style.backgroundColor = "#cdcdcd";

                if (document.getElementById('tab').rows[2].cells[2].innerHTML == 'X') {
                    document.getElementById('win').innerHTML = 'X';
                }
                else
                    document.getElementById('win').innerHTML = 'O';

                document.getElementById('winner').style.visibility = "visible";
            }
            else if ((horizontalTic == 1) || (verticalTic == 1)) {
                count = len + 1;
                document.getElementById('winner').style.visibility = "visible";
                document.getElementById('win').innerHTML = 'X';
            }
            else if ((ticSecDiag == 3) || (tacSecDiag == 3)) {
                count = len + 1;
                document.getElementById('tab').rows[0].cells[2].style.backgroundColor = "#cdcdcd";
                document.getElementById('tab').rows[1].cells[1].style.backgroundColor = "#cdcdcd";
                document.getElementById('tab').rows[2].cells[0].style.backgroundColor = "#cdcdcd";
                if (document.getElementById('tab').rows[0].cells[2].innerHTML == 'X') {

                    document.getElementById('win').innerHTML = 'X';
                }
                else
                    document.getElementById('win').innerHTML = 'O';

                document.getElementById('winner').style.visibility = "visible";

            }
            else if ((horizontalTac == 1) || (verticalTac == 1)) {
                count = len + 1;
                document.getElementById('winner').style.visibility = "visible";
                document.getElementById('win').innerHTML = 'O';
            }

        }
    }
    document.getElementById('reset').onclick = function () {
        ticMainDiag = 0;
        tacMainDiag = 0;
        ticSecDiag = 0;
        tacSecDiag = 0;
        verticalTac = 0;
        verticalTic = 0;
        horizontalTic = 0;
        horizontalTac = 0;
        count = 0;

        document.getElementById('winner').style.visibility = "hidden";
        for (i = 0; i < len; i++) {

            document.getElementsByTagName('td')[i].innerHTML = '';
            document.getElementsByTagName('td')[i].style.backgroundColor = "#ffffff";
        }
    }

}
