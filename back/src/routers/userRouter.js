import { Router } from "express";
import {createUser, checkDuplicate} from "../services/userService";

const router = Router();
 
//회원가입 라우터 구현
router.post("/user/register", async function (req, res, next) {
  var query = "SELECT id FROM user where id ='" +id + "';";
  connection.query(query, function(err, rows) {
    if (rows.length == 0) {
        var sql = {
            email : email,
            userid: id,
            password: hashPassword,
        };
        var query = connection.query('insert into user set ?', sql, function(err, rows) {
            if(err) throw err;
            else {
                res.send('성공');
            }
            });
    } else {
        res.send('중복ID');  
    }
  });

  
    const { email, password, nickname } = req.body;
  const isDuplicate = await checkDuplicate(email);

  if (isDuplicate) {
    res.status(409).json({ message: "이미 존재하는 이메일 입니다." });
  } else {
    const token = await createUser(email, password, nickname);
    res.json({ token });
  }
});


export default router;
