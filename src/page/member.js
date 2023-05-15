import React from 'react'

export default function Member() {
  return (
<div>

    <body>
    
    <div class="container mt-3">
      <h2>Member Table</h2>
      <p>รายชื่อสมาชิก</p>            
      <table class="table table-striped">
        <thead>
          <tr>
          <th>Picture</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td><img src="./images/n1.jpg" width={"50"}/></td>
            <td>Hanni</td>
            <td>1150</td>
            <td>john@example.com</td>
            <td><button type="button" class="btn btn-success">Read more</button></td>
          </tr>
          <tr>
          <td><img src="./images/n2.jpg" width={"50"}/></td>
            <td>Dandie</td>
            <td>1112</td>
            <td>mary@example.com</td>
            <td><button type="button" class="btn btn-success">Read more</button></td>
          </tr>
          <tr>
          <td><img src="./images/n3.jpg" width={"50"}/></td>
            <td>herin</td>
            <td>555</td>
            <td>july@example.com</td>
            <td><button type="button" class="btn btn-success">Read more</button></td>
          </tr>
          <tr>
          <td><img src="./images/n4.jpg" width={"50"}/></td>
            <td>jenny</td>
            <td>1592</td>
            <td>july@example.com</td>
            <td><button type="button" class="btn btn-success">Read more</button></td>
          </tr>
          <tr>
          <td><img src="./images/n5.jpg" width={"50"}/></td>
            <td>นา</td>
            <td>4399</td>
            <td>july@example.com</td>
            <td><button type="button" class="btn btn-success">Read more</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    
    </body>
    
    </div>
  )
  }