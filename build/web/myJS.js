window.addEventListener("load", function () {

    ////////////////////////////////////////////////////////////////////////////
    //3.1
    ////////////////////////////////////////////////////////////////////////////

    $("div").height(100);
    $("div").width(100);
    $("div").css("border-style", "solid");
    $("div").css("border-width", 1);
    $("#div1").css("background-color", "blue");
    $("#div2").css("background-color", "red");
    $("#div3").css("background-color", "purple");

    $("#div1").click(function () {
        $(this).hide();
    });
    $("#div2").mouseover(function () {
        $(this).css("border-width", 4);
    });
    $("#div2").click(function () {
        $(this).css("fontSize", 40);
    });

    ////////////////////////////////////////////////////////////////////////////
    //3.2
    ////////////////////////////////////////////////////////////////////////////

    $("div").click(function () {
        var text = $(this).text();
        $(this).text(text * text);
    });

    ////////////////////////////////////////////////////////////////////////////
    //3.3
    ////////////////////////////////////////////////////////////////////////////

    $("li").filter(":odd").css("background-color", "lightgrey");

    var size = 10;

    $("li").each(function () {
        $(this).css("fontSize", size);
        size += 5;
    });

    ////////////////////////////////////////////////////////////////////////////
    //3.4
    ////////////////////////////////////////////////////////////////////////////
    var mostRecent = null;

    $("img").click(function () {

        if (mostRecent !== null) {
            var recentSrc = mostRecent.src;
            var thisSrc = this.src;

            this.src = recentSrc;
            mostRecent.src = thisSrc;

            mostRecent = null;
        } else {
            mostRecent = this;
        }
    });

    ////////////////////////////////////////////////////////////////////////////
    //3.5
    ////////////////////////////////////////////////////////////////////////////
        
        //skipped, ran out of time
        
    ////////////////////////////////////////////////////////////////////////////
    //3.6
    ////////////////////////////////////////////////////////////////////////////

    function Person(id, name) {
        this.id = id;
        this.name = name;
    }

    person1 = new Person(1, "Homer");
    person2 = new Person(2, "Marge");
    person3 = new Person(3, "Bart");
    person4 = new Person(4, "Lisa");
    person5 = new Person(5, "Maggie");

    var persons = [person1, person2, person3, person4, person5];

    var table = $("<table></table>");

    $.each(persons, function (idx, person) {
        var row = $("<tr></tr>");
        row.append($("<td></td>").html(person.id));
        row.append($("<td></td>").html(person.name));

        table.append(row);
    });

    $(document.body).append(table);


    $("tr").mouseover(function () {
        $(this).css("font-weight", "bold");
        $(this).css("font-style", "italic");
    });
    $("tr").mouseout(function () {
        $(this).css("font-weight", "normal");
        $(this).css("font-style", "normal");
    });

    ////////////////////////////////////////////////////////////////////////////
    //3.7
    ////////////////////////////////////////////////////////////////////////////

    //see calcScripts.js

});
