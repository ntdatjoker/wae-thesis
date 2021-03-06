package wae.thesis.indiv.app.restapi;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import wae.thesis.indiv.app.user.UserSession;

import static org.springframework.web.bind.annotation.RequestMethod.*;

/**
 * Created by Nguyen Tan Dat.
 */

@RestController
public class AccountApi {

    @RequestMapping(path = "/api/account", method = {GET, POST, PUT, DELETE})
    public Object getAccount() {
        return new UserSession();
    }

    @RequestMapping(path = "/authenticateAccount", method = {GET, POST, PUT, DELETE})
    public Object authenticateAccount() {
        return new UserSession();
    }


}
