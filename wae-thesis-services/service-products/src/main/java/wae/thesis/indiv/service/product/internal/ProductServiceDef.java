package wae.thesis.indiv.service.product.internal;

import wae.thesis.indiv.api.ServiceBinder;
import wae.thesis.indiv.api.item.ActionType;
import wae.thesis.indiv.api.item.UserRole;
import wae.thesis.indiv.api.model.Action;
import wae.thesis.indiv.api.model.ServiceDef;
import wae.thesis.indiv.service.product.external.action.FetchProductAction;
import wae.thesis.indiv.service.product.internal.behavior.ProductBehavior;

/**
 * Created by Nguyen Tan Dat.
 */

@ServiceBinder(className = ProductServiceDef.class)
public class ProductServiceDef extends ServiceDef {


    public ProductServiceDef(ProductBehavior productBehavior) {
        super("product", "Products", new ProductInitializer());

        addUnallowedRoles(UserRole.GUEST);

        addSubService(new ServiceDef("fetch-product", "Fetch Product")
              .addUnallowedRoles(UserRole.GUEST)
              .addActionHandler(
                    new Action("fetch-product", ActionType.UPDATE, UserRole.ADMINISTRATORS),
                    new FetchProductAction()
              )
        );
    }
}