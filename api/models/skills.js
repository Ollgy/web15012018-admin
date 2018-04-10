const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
  id: {
    type: Number,
    required: [true, 'Не указан порядковый номер']
  },
  name: {
    type: String,
    required: [true, 'Не указан навык']
  },
  percents: {
    type: String,
    required: [true, 'Не указан уровень навыка']
  },
  type: {
    type: Number,
    default: Date.now,
    required: [true, 'Не указана группа навыка']
  }
});

// просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('skills', BlogSchema);