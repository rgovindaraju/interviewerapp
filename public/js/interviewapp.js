$(document).ready(function(){
	
    //$('.datepicker').datepicker();
    $('#datepicker').datetimepicker({
      pickTime: false
    });
    $('#datetimepicker').datetimepicker({
      pickDate: false,
      pick12HourFormat: true
    });

});