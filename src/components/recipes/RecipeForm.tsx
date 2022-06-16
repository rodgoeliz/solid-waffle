import { Button, Card, TextField, Typography } from '@mui/material';
import { useNewRecipe } from 'api/mutations/recipe';
import { ListInput } from 'components/global/ListInput';
import { useFormik } from 'formik';
import { NewRecipe } from 'types/recipe';
import * as Yup from 'yup';

export const RecipeForm = () => {
  const { isLoading, mutate } = useNewRecipe();
  const formik = useFormik<NewRecipe>({
    initialValues: {
      name: '',
      author: { name: '' },
      cookTime: 1,
      ingredients: [],
      steps: [],
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      author: Yup.object({ name: Yup.string().required() }).required(
        'Required'
      ),
      cookTime: Yup.string().required('Required'),
      ingredients: Yup.array().of(Yup.string()).min(1).required('Required'),
      steps: Yup.array().of(Yup.string()).min(1).required('Required'),
    }),

    onSubmit: (values: NewRecipe) => {
      mutate({ recipe: values });
    },
  });
  return (
    <Card sx={{ p: 1 }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="recipe name"
          value={formik.values.name}
          onChange={formik.handleChange}
          sx={{ my: 1 }}
          disabled={isLoading}
        />

        <TextField
          fullWidth
          id="author.name"
          name="author.name"
          label="author name"
          value={formik.values.author.name}
          onChange={formik.handleChange}
          sx={{ my: 1 }}
          disabled={isLoading}
        />

        <TextField
          fullWidth
          id="cookTime"
          name="cookTime"
          label="cook time in minutes"
          value={formik.values.cookTime}
          onChange={formik.handleChange}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          sx={{ my: 1 }}
          disabled={isLoading}
        />

        <Typography variant="subtitle2" component="div">
          List of ingredients
        </Typography>
        <ListInput
          key={'ingredients'}
          onChange={(value: string[]) =>
            formik.setFieldValue('ingredients', value)
          }
          disabled={isLoading}
        />

        <Typography variant="subtitle2" component="div">
          List of instructions
        </Typography>
        <ListInput
          disabled={isLoading}
          key={'step'}
          onChange={(value: string[]) => formik.setFieldValue('steps', value)}
        />
        <Typography>{JSON.stringify(formik.errors)}</Typography>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ my: 1 }}
          disabled={isLoading}
        >
          Submit
        </Button>
      </form>
    </Card>
  );
};
