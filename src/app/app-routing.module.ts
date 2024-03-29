import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'phone-registration',
    loadChildren: () => import('./phone-registration/phone-registration.module').then( m => m.PhoneRegistrationPageModule)
  },
  {
    path: 'store-availability',
    loadChildren: () => import('./store-availability/store-availability.module').then( m => m.StoreAvailabilityPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'addproduct',
    loadChildren: () => import('./addproduct/addproduct.module').then( m => m.AddproductPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'store-profile',
    loadChildren: () => import('./store-profile/store-profile.module').then( m => m.StoreProfilePageModule)
  },
  {
    path: 'store-profile1',
    loadChildren: () => import('./store-profile1/store-profile1.module').then( m => m.StoreProfile1PageModule)
  },
  {
    path: 'store-profile2',
    loadChildren: () => import('./store-profile2/store-profile2.module').then( m => m.StoreProfile2PageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'paymentcard',
    loadChildren: () => import('./paymentcard/paymentcard.module').then( m => m.PaymentcardPageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'product-details',
    loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'all-product',
    loadChildren: () => import('./all-product/all-product.module').then( m => m.AllProductPageModule)
  },
  {
    path: 'rider',
    loadChildren: () => import('./rider/rider.module').then( m => m.RiderPageModule)
  },
  {
    path: 'total-balance',
    loadChildren: () => import('./total-balance/total-balance.module').then( m => m.TotalBalancePageModule)
  },
  {
    path: 'stock',
    loadChildren: () => import('./stock/stock.module').then( m => m.StockPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
