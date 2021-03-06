const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  PicSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Укажите описание картинки']
    },
    tech: {
      type: String,
      required: [true, 'Укажите описание техники']
    },
    picture: {
      type: String
    }
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('imgworks', PicSchema);