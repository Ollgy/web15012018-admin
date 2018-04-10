<template lang="pug">
    .admin__block.adminblog
            .admin__title-wrapper
                .admin__title Страница "Блог"
            form.adminblog__form
                .admin__lowtitle-wrapper
                    .admin__lowtitle Добавить запись
                label.admin__label(for="")
                    input.admin__input(v-model="title" type="text", placeholder="Название", id="title", name="title")
                                   
                label.admin__label(for="")
                    input.admin__input(v-model="date" type="text", placeholder="Дата", id="date", name="date")
                                   
                label.admin__label(for="")
                    textarea.admin__textarea(v-model="text" type="textarea", placeholder="Содержание", id="content", name="content")
            .admin__button
                button.form__button.form__button--admin(type="button",  id="submit" @click="sendArticle") Добавить
  
</template>

<script>
import moment from 'moment';
import config from '../../../config';

export default {
    data: () => {
    return {
      moment: moment,
      title: '',
      date: moment(new Date(), 'DD/MM/YYYY').format('YYYY-MM-DD'),
      text: '',
      msgblog: ''
    };
  },
  methods: {
    sendArticle: function() {
      console.log(this.title, this.date, this.text);
      this.axios({
        method: 'post',
        url: config.server+'/api/blog',
            data: {
            title: this.title,
            date: this.date,
            text: this.text
            }
      })
    }
  }
};
    

</script>

<style lang="scss" src='styles/content.scss' scoped>

</style>
