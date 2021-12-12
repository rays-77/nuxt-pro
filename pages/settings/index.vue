<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
                <fieldset class="form-group">
                  <input class="form-control" v-model="userinfo.image" type="text" placeholder="URL of profile picture">
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg" v-model="userinfo.username" type="text" placeholder="Your Name">
                </fieldset>
                <fieldset class="form-group">
                  <textarea class="form-control form-control-lg" v-model="userinfo.bio" rows="8" placeholder="Short bio about you"></textarea>
                </fieldset>
                <!-- <fieldset class="form-group">
                  <input class="form-control form-control-lg" type="text" placeholder="Email">
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg" type="password" placeholder="Password">
                </fieldset> -->
                <button @click="update" class="btn btn-lg btn-primary pull-xs-left">
                  更新用户
                </button>
                 <button @click="logout" class="btn btn-lg btn-primary pull-xs-right">
                  注销用户
                </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require('js-cookie') : undefined
import {updateUser,getUser} from '@/api/user'
import { mapState } from 'vuex'
export default {
  middleware: 'authenticated',
  name: 'SettingsIndex',
  data(){
    return {
       userinfo: {
            username: "",
            bio: "",
            image: "",
       }
       ,tags:""
    }
  },
 async asyncData ({ store }) {
    const user = store.state.user;
    let userinfo = {}
    if(user && user.username){
       let data =  await getUser(user.username)
       if(data && data.data && data.data.profile){
          userinfo = data.data.profile
       }
       console.log("用户信息",userinfo)
    }
    return {
     userinfo
    }
  },
  methods:{
    //更新用户信息
    async update(){
      console.log("更新用户信息",this.userinfo)
      const data = await updateUser({
        user: this.userinfo
      })
      if(data){
        alert("提交成功");
        //this.$router.push('/')
      }
    },
    logout(){
        // 注销用户
        this.$store.dispatch('logoutUser')
        // 删除Cookie
        Cookie.remove("user")
        // 跳转到首页
        this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
