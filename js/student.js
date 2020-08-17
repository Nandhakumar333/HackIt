$(document).ready(function () {
  $.ajax({
    url: "https://api.spotify.com/v1/albums",
  }).done(function (data) {
    console.log(JSON.stringify(data));
    $("#monitor_data").append(JSON.stringify(data));
  });
  const name = "NANDHAKUMAR.V";
  const roll = "17BCS021";
  const dep = "CSE";
  const email = "arunkumar.17cs@kct.ac.in";
  $("#addstudent").click(function () {
    $("#table-div").append(
      '<div class="row">\
    <div class="col-sm-12 col-md-12 col-lg-12 col-12">\
      <div class="table-responsive table-responsive-sm">\
        <table class="table table-sm text-center">\
          <tbody>\
            <tr>\
              <td rowspan="2" style="vertical-align: middle;">1</td>\
              <td>' +
        roll +
        "</td>\
              <td>" +
        dep +
        "</td>\
              <td >" +
        name +
        '</td>\
              <td><button type="submit" class="btn btn-outline-warning btn-sm">\
                Update <i class="fa fa-pencil-square-o" aria-hidden="true"></i>\
              </button></td>\
              <td><button type="submit" class="btn btn-outline-danger btn-sm">\
                Delete <i class="fa fa-trash" aria-hidden="true"></i>\
              </button></td>\
            </tr>\
            <tr>\
              <td colspan="2">' +
        email +
        '</td>\
              <td>Password</td>\
              <td colspan="2">\
                <button type="submit" class="btn btn-outline-primary btn-sm">\
                  View <i class="fa fa-chevron-right"></i>\
                </button>\
              </td>\
            </tr>\
          </tbody>\
        </table>\
      </div>\
    </div>\
    <div class="col-sm-12 col-md-12 col-lg-12 col-12">\
      <div class="table-responsive table-responsive-sm">\
        <table class="table table-sm text-center">\
          <tbody>\
            <tr>\
              <td rowspan="2" style="vertical-align: middle;">1</td>\
              <td>17BCS021</td>\
              <td>CSE</td>\
              <td>ARUNKUMAR.V</td>\
              <td><button type="submit" class="btn btn-outline-warning btn-sm">\
                Update <i class="fa fa-pencil-square-o" aria-hidden="true"></i>\
              </button></td>\
              <td><button type="submit" class="btn btn-outline-danger btn-sm">\
                Delete <i class="fa fa-trash" aria-hidden="true"></i>\
              </button></td>\
            </tr>\
            <tr>\
              <td colspan="2">nandhakumar17cs@kct.ac.in</td>\
              <td>Password</td>\
              <td colspan="2" >\
                <button type="submit" class="btn btn-outline-primary btn-sm" data-toggle="popover" id="myPopover">\
                  View <i class="fa fa-chevron-right"></i>\
                </button>\
              </td>\
            </tr>\
          </tbody>\
        </table>\
      </div>\
    </div>\
  </div>'
    );
  });
});
