
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = (route, state) => {
 let _AuthenticationService= inject(AuthenticationService)
 let _router=inject(Router)
 if(_AuthenticationService.isLoggedIn()){
  return true;
 }else{
    showAlert()
    _router.navigateByUrl('/login')
  return false;
 }
 
};


function showAlert() {
    Swal.fire({
        title: 'Login Required!',
        text: 'You Must Login!',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
}

