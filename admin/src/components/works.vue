<template lang="pug">
    .admin__block.adminworks
            .admin__title-wrapper
                .admin__title Страница "Мои работы"
            form.adminblog__form(@submit.prevent="sendFile" enctype="multipart/form-data")
                .admin__lowtitle-wrapper
                    .admin__lowtitle Добавить запись
                label.admin__label(for="")
                    input.admin__input(v-model="name" type="text", placeholder="Название проекта", id="title", name="title")
                                   
                label.admin__label(for="")
                    input.admin__input(v-model="tech" type="text", placeholder="Технология", id="tech", name="tech")
                                   
                .addpicture__block
                    a.addpicture__link(href="")                                
                        img.addpicture__link-img(src="~img/add_pic.png")
                        span.addpicture__link-text Загрузить картинку
                          input.addpicture__input(:photo="photo" type="file" 
                                            required accept="image/*"  
                                            @change="fileChange($event.target.files)" 
                                            ref="upload")
                .admin__button
                    button.form__button.form__button--admin(type="submit",  id="submit") Добавить
  
</template>

<script>

import config from '../../../config';

export default {
    data: () => {
    return {
      name: '',
      tech:'',
      photo: null,
      msgfile: ''
    };
  },
  methods: {
    sendFile: function() {
      let formData = new FormData();
      formData.append('photo', this.photo, this.photo.name);
      formData.append('name', this.name);
      formData.append('tech', this.tech);
      this.axios.post(config.server+'/admin/imgworks', formData)
      .then(rs => {
        this.msgfile = rs.data.msg;
        if (rs.data.status === 'Ok') {
          this.name = '';
          this.photo = null;
          this.$refs.upload.value = null;
        }

      });
    },
    fileChange: function(file) {
      this.photo = file[0];
      console.log(this.photo);
    }
  }
};


</script>

<style lang="scss" src='styles/content.scss' scoped>

</style>
