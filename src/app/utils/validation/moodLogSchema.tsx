import * as Yup from 'yup';

export const moodLogSchema = Yup.object({
    moodNote: Yup.string().max(2000, 'Mood note can\'t be more than 2000 characters'),
    moodTagsChosen: Yup.array().min(1, 'Please select at least one mood'),
    moodLogType: Yup.string().required('Please select a mood log type'),
});