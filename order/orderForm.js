$(document).ready(function () {
    var count=1;
    var rows = [1];
    var displayTable = false;
    var table = $('#table1');
    var tableBody = $("#table-body")
    var tableBody = $('#table-body');
    var words;
        var large;
        var fib;
        var dup;
    if (displayTable) {
        table.css('display', 'block');
    } else {
        table.css('display', 'none');
    }

    $("#add").click(function () {
        count = count + 1;
        rows.push(count);
        var head = $('#table-head');
        var div = "<div id='order-row-" + count + "' class='row'>";
        var row = $('#fields').html();
        row = row.replace(/1/g, count);
        row = row + '<button type="button" class="del-btn" value="' + count + '">x</button>';
        div = div + row;
        div = div + '</div>'
        head.append(div);
        console.log(count);
        console.log("rows value:"+rows);
    })

    $(document).on('click', '.del-btn', function (event) {
        let id = $(event.currentTarget).val();
        var removeDivID = "#order-row-" + id;
        $(removeDivID).remove();
        rows.splice(id-1,1);
        console.log(count)
        console.log("rows value:"+rows);
    });

    $('#clear').click(function () {
        for (let i = 0; i < rows.length; i++) {
            $("#order-row-" +rows[i]).remove();
        }
        rows = [1];
        table.css('display', 'none');
        tableBody.html('');
        $('#char-id1').val('');
        $('#large-id1').val('');
        $('#fib-id1').val('');
        $("#dup-id1").val('');
    })

    $(function () {
        $(document).on('keydown', ".char", function (event) {
            if (event.shiftKey || event.ctrlKey || event.altKey) {
                event.preventDefault();
            } else {
                var key = event.keyCode;
                if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
                    event.preventDefault();
                }
            }
        });
    });

    $("#submit").click(function () {
        if ($(".row").length <= 3) {
            alert("add rows");
            return false
        }

         words = [];
         large = [];
         fib = [];
         dup = [];
        console.log(rows.length);
        for (let i = 0, j = 0; i <rows.length; i++, j++) {
            words[i] = $('#char-id' + rows[i]).val();
            large[i] = parseInt($('#large-id' + rows[i]).val());
            fib[i] = parseInt($('#fib-id' + rows[i]).val());
            dup[i] = parseInt($("#dup-id" + rows[i]).val());
            if (words[j] == "" || large[j] == "" || fib[j] == "" || dup[j] == "") {
                alert("fill the box")
                return false
            }
        }
      
        function largest(large) {
            var temp, size;
            size = large.length;
            console.log(size);
            for (var i = 0; i < size-1; i++) {
                for (var j = i + 1; j < size; j++) {

                    if (large[i] > large[j]) {
                        temp = large[i];
                        large[i] = large[j];
                        large[j] = temp;
                    }
                }
            }
            $("#large").text(large[size - 2]);
            return;
        }
        largest(large)

        function duplicate(dup) {
            var count;
            var result = "";
            for (let i = 0; i < dup.length - 1; i++) {
                count = 1;
                for (let j = i + 1; j < dup.length; j++) {
                    if (dup[i] == dup[j]) {
                        dup[j] = '0';
                        console.log(dup[i])
                        count = 0;
                    }
                }
                if (count == 1) {
                    dup[i] = '0';
                    console.log(dup[i])
                }
            }
            dup[dup.length - 1] = '0';
            for (let i = 0; i < dup.length; i++) {
                if (dup[i] != '0')
                    result = result + " " + dup[i];
            }
            $("#dup").text(result);
            return;
        }
        duplicate(dup);

        function Repeated(words) {
            let obj = new Set();
            for (let i = 0; i <= words.length; i++) {
                let char = words[i];
                if (obj.has(char))
                    return char;
                else
                    obj.add(char);
            }
            return '\0';
        }
        $("#words").text(Repeated(words));

        function fibanocci(fib) {
            var num1, num2, res, temp = "";
            for (let i = 0; i < fib.length; i++) {
                num1 = 0;
                num2 = 1;
                res = 0;
                res = num1 + num2;
                for (let j = 1; j <= fib[i]; j++) {
                    if (res == fib[i]) {
                        break;
                    }
                    num1 = num2;
                    num2 = res;
                    res = num1 + num2;
                }
                if (res == fib[i]) {
                    temp = temp + "  " + res;
                }
            }
            $("#fib").text(temp);
            console.log(temp);
            return;
        }
        fibanocci(fib);

        table.css('display', 'block')
    })

})
