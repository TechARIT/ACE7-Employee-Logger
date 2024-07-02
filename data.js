
$(document).ready(function () {
    FillDataList();
     populateEmployeeIdDropdown(); // Uncomment this function call
});
function populateEmployeeIdDropdown()
{
        $.getJSON("https://script.google.com/macros/s/AKfycbwfvuuIFVZJ97Ynqlq-E4SKCa0X4h2XhSyvUoBjE9Qv8m3mIosX5XsCo0A1FRID3iwXqw/exec?page=employeeCode", 
        function (data) {                              //01
          var Options="";                              
          $.each(data, function(key, value)            //02
          {
            Options = Options + '<option>' + value + '</option>';   //03
          });
          $("#employeeCode").append(Options);               //04
        });

}
function FillDataList()
{
        $.getJSON("https://script.google.com/macros/s/AKfycbwfvuuIFVZJ97Ynqlq-E4SKCa0X4h2XhSyvUoBjE9Qv8m3mIosX5XsCo0A1FRID3iwXqw/exec?page=dropdown", 
        function (data) {                              //01
          var Options="";                              
          $.each(data, function(key, value)            //02
          {
            Options = Options + '<option>' + value + '</option>';   //03
          });
          $("#employeeName").append(Options);               //04
        });

}