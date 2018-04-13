package service;

import java.util.UUID;

import DAO.UserinfoDAO;
import redis.clients.jedis.ShardedJedis;
import bean.Userinfo;
import until.redis.Redis;


public class UserinfoController {

    private UserinfoDAO ud;
    Userinfo u = new Userinfo();

    public UserinfoController() {
        ud=new UserinfoDAO();
    }

	public String Verify(int phone) throws Exception {
		String str = "0123456789";
		String verify = "";
		for (int i = 1; i <= 4; i++) {
			String num = String.valueOf(str.charAt((int) Math.floor(Math.random() * str.length())));
			verify += num;
			str = str.replaceAll(num, "");
		}
		u.setPhoneId(String.valueOf(phone));
		u.setVerify(verify);
		ud.saveV(u);
		//服务器显示
        System.out.println(verify);
        //返回客户端数据
        return verify;
	}

	public String regist(String PhoneId, String pwd, String verify)throws Exception {

		u.setPhoneId(PhoneId);
		u.setPassword(pwd);
		u.setVerify(verify);
		if ( ! Redis.exists(u.getPhoneId())) {
			if(u.getVerify().equals(ud.verify(u).getVerify())){
				String userid = UUID.randomUUID().toString().replaceAll("-", "");
				u.setUserId(userid);
				if (ud.saveP(u)) {
					String Playerid = userid + "|#";//设置Playerid=userid|#
					u.setPlayerId(Playerid);//设置玩家id
					u.setUsername("aa");//默认名字
					u.setClothes("blue");//默认衣服
					u.setRecord("0000");//默认战绩
					ud.save(u);
					return userid;
				}else {
					System.out.println("regist false");
					return "egist false";
				}
			}else {
				System.out.println("verify false");
				return "verify false";
			}
		}else{
			System.out.println("phone num cover");
			return "phone num cover";
		}

	}


	public boolean login(String PhoneId, String pwd )throws Exception {
        u.setPhoneId(PhoneId);
		ud.login(u);
		if (u.getPassword().equals(pwd)) {
			System.out.println("success");
			return true;
		} else {
			System.out.println("passwd flase");
			return false;
		}
    }

	public void logout()  {

	}

	//修改用户名字
	public String Cname(String userid,String username)throws Exception{
		u.setUserId(userid);
		u.setUsername(username);
        String Cn=ud.Cname(u);//返回值为修改后的名字
		return Cn;
	}

    // 改变衣服颜色
    public String Cclothes(String Userid, String clothes)throws Exception{
        u.setUserId(Userid);
        u.setClothes(clothes);
		String Cc=ud.Cclothes(u);//返回值为修改后的衣服
        return Cc;
    }

    //获取用户信息 username|clothes|userid|record
    public String Getuserinfo(String userid) throws Exception {
        u.setUserId(userid);
        String clothes = null;
        String Clothes=ud.finduser(u).getClothes();

        //转化成rbg颜色码提供给前端使用
		switch (Clothes){
			case "red":
				clothes="FF0000";
				break;
			case "green":
				clothes="32CD32";
				break;
			case "blue-black":
				clothes="00008B";
				break;
			case "sky-blue":
				clothes="87CECB";
				break;
			case "white":
				clothes="FFFF";
				break;
			case "black":
				clothes="000000";
				break;
			case "yellow":
				clothes="FFFF00";
				break;
			case "purple":
				clothes="800080";
				break;
			case "pink":
				clothes="FFB6C1";
				break;
			case "brown":
				clothes="*8B4513";
				break;
		}
        String user=u.getUsername()+"|"+clothes+"|"+u.getUserId()+"|"+u.getRecord();
        return user;
    }

    //返回用户游戏击杀记录
    public String GetRecord(String userid)throws Exception{
    	u.setUserId(userid);
    	return ud.finduser(u).getRecord();

	}



}
