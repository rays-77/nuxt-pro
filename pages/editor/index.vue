<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                  <input type="text" v-model="article.title" class="form-control form-control-lg" placeholder="Article Title">
              </fieldset>
              <fieldset class="form-group">
                  <input type="text" v-model="article.description" class="form-control" placeholder="What's this article about?">
              </fieldset>
              <fieldset class="form-group">
                  <textarea class="form-control" v-model="article.body" rows="8" placeholder="Write your article (in markdown)"></textarea>
              </fieldset>
              <fieldset class="form-group">
                  <input type="text" v-model="tags"  class="form-control" placeholder="Enter tags"><div class="tag-list"></div>
              </fieldset>
              <button @click="createArticle" class="btn btn-lg pull-xs-right btn-primary" type="button">
                  Publish Article
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {createNewArticle} from '@/api/article'
export default {
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: 'authenticated',
  name: 'EditorIndex',
  data(){
    return {
       "article": {
            "title": "create new post 01",
            "description": "create new post description 01",
            "body": "create new post body 01",
            "tagList": []
       }
       ,tags:""
    }
  },
  methods:{
    async createArticle(){
      if(this.tags!=""){
          this.article.tagList = this.tags.split(',')
      }
      console.log({
        article: this.article
      })
      const data = await createNewArticle({
        article: this.article
      })
      if(data){
        alert("提交成功");
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>

</style>
