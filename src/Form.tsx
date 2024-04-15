import { Typography } from '@alifd/next';
import { FormItem, FormLayout, Input } from '@formily/next';
import { Field } from '@formily/react';
import { createForm } from '@formily/core';
import { FormProvider } from '@formily/react';
const form = createForm({
  values: {
    size: 'default',
  },
  effects: () => {},
});

export const Form = () => {
  return (
    <FormProvider form={form}>
      <FormLayout layout="inline">
        <Typography.H2 className="header-border">example</Typography.H2>
       <Field
          name="input"
          decorator={[FormItem, {
            feedbackLayout: 'terse',
          }]}
          component={[
            Input,
            {
              placeholder: '请输入',
              label: '地址',
            },
          ]}
        />
      </FormLayout>
    </FormProvider>
  );
};
