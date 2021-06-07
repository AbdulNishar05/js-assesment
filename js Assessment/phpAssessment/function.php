<?php include 'Db.php' ?>
<?php
    function pagination(){
    global $connection;
    $results_per_page = 5;
    $query='SELECT * FROM products';
    $result = mysqli_query($connection, $query);
    $number_of_results = mysqli_num_rows($result);
    $number_of_pages = ceil($number_of_results/$results_per_page);
    if (!isset($_GET['page'])) {
      $page = 1;
    } else {
      $page = $_GET['page'];
    }
    $this_page_first_result = ($page-1)*$results_per_page;
    $query='SELECT * FROM products LIMIT ' . $this_page_first_result . ',' .  $results_per_page;
    $result = mysqli_query($connection, $query);

    while ($row = mysqli_fetch_array($result)) { ?>
      <form action="index.php?action=add&Id=<?= $row['Id']; ?>" method="post">
          <tr>
                  <td class="product-image"><img src="<?php echo $row["image"]; ?>" width="100" height="100"></td>
                  <td><?= $row['Name']; ?></td>
                  <td><?php echo $row['Sku'];?></td>
                  <td>₹<?= number_format($row['Price'], 2); ?></td>
                  <td class="card-body d-flex justify-content-between">
                  <td> <input type="number" Name="quantity" value="1" size="2" min=1></td>
                  <td><input type="submit" value="Add to Cart" class="btn btn-success btn-sm"></td>
              </div>
          </div>
    </form> 
    <?php }

    for ($page=1;$page<=$number_of_pages;$page++) {
      echo '<a "  href="index.php?page=' . $page . '">' . $page . '</a> ';
    }
  }
          ?>
   
          
      
 