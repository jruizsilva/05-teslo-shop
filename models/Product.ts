import type { IProduct } from '@/interfaces'
import mongoose, { Schema, model, type Model } from 'mongoose'

const productSchema = new Schema(
  {
    description: { type: String, require: true },
    images: [{ type: String }],
    inStock: { type: Number, require: true, default: 0 },
    price: { type: Number, require: true, default: 0 },
    sizes: [
      {
        type: String,
        enum: {
          values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
          message: '{VALUE} no es un tamaño válido'
        }
      }
    ],
    slug: { type: String, require: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, require: true },
    type: {
      type: String,
      enum: {
        values: ['shirts', 'pants', 'hoodies', 'hats'],
        message: '{VALUE} no es un tipo válido'
      }
    },
    gender: {
      type: String,
      enum: {
        values: ['men', 'women', 'kid', 'unisex'],
        message: '{VALUE} no es un genero válido'
      }
    }
  },
  { timestamps: true }
)
productSchema.index({ title: 'text', tags: 'text' })

const Product: Model<IProduct> =
  mongoose.models.Product ?? model('Product', productSchema)

export default Product
